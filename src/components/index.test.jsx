import React from "react";
import { setupApiStore } from "../tests-utils";
import { PlaylistItem } from "./PlaylistItem"; 
import { SidebarItem } from "./SidebarItem";
import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { tracksApi } from "../services/tracks";
import { authApi } from "../services/login";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Router,Routes, Route,MemoryRouter } from "react-router-dom"; 
const constant = {
   "id": 33,
   "name": "Classical Metal Workout",
   "author": "-",
   "release_date": "1991-09-06",
   "genre": "Рок музыка",
   "duration_in_seconds": 246,
   "album": "Workout",
   "logo": null,
   "track_file": "https://painassasin.online/media/music_files/Musiclfiles_-_Classical_Metal_Workout.mp3",
   "stared_user": [
       {
           "id": 83,
           "username": "zick3333@mail.ru",
           "first_name": "",
           "last_name": "",
           "email": "zick3333@mail.ru"
       },
       {
           "id": 469,
           "username": "gerargef11@mail.ru",
           "first_name": "",
           "last_name": "",
           "email": "gerargef11@mail.ru"
       },
       {
           "id": 503,
           "username": "2222222222222222222222222222@tut.by",
           "first_name": "",
           "last_name": "",
           "email": "2222222222222222222222222222@tut.by"
       },
       {
           "id": 630,
           "username": "mar_r@mail.rur",
           "first_name": "",
           "last_name": "",
           "email": "mar_r@mail.rur"
       },
       {
           "id": 599,
           "username": "distanceOn",
           "first_name": "",
           "last_name": "",
           "email": "ro_shev@inbox.ru"
       },
       {
           "id": 690,
           "username": "lawa",
           "first_name": "",
           "last_name": "",
           "email": "lawa@yandex.com"
       }
   ]
}
// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
  rest.get('https://painassasin.online/catalog/track/all', (req, res, ctx) => {
    return res(
      ctx.json([{
         "id": 33,
         "name": "Classical Metal Workout",
         "author": "-",
         "release_date": "1991-09-06",
         "genre": "Рок музыка",
         "duration_in_seconds": 246,
         "album": "Workout",
         "logo": null,
         "track_file": "https://painassasin.online/media/music_files/Musiclfiles_-_Classical_Metal_Workout.mp3",
         "stared_user": [
             {
                 "id": 83,
                 "username": "zick3333@mail.ru",
                 "first_name": "",
                 "last_name": "",
                 "email": "zick3333@mail.ru"
             },
             {
                 "id": 469,
                 "username": "gerargef11@mail.ru",
                 "first_name": "",
                 "last_name": "",
                 "email": "gerargef11@mail.ru"
             },
             {
                 "id": 503,
                 "username": "2222222222222222222222222222@tut.by",
                 "first_name": "",
                 "last_name": "",
                 "email": "2222222222222222222222222222@tut.by"
             },
             {
                 "id": 630,
                 "username": "mar_r@mail.rur",
                 "first_name": "",
                 "last_name": "",
                 "email": "mar_r@mail.rur"
             },
             {
                 "id": 599,
                 "username": "distanceOn",
                 "first_name": "",
                 "last_name": "",
                 "email": "ro_shev@inbox.ru"
             },
             {
                 "id": 690,
                 "username": "lawa",
                 "first_name": "",
                 "last_name": "",
                 "email": "lawa@yandex.com"
             }
         ]
     }])
    );
  }),
  rest.put('${BASE_API_URL}/todos/1', (req, res, ctx) => {
   return res(ctx.json({ completed: true }));
 }),

];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store
const storeRef = setupApiStore(tracksApi);
const loginRef = setupApiStore(authApi);

describe("Tracks feature", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should show requested data", async () => {
    render(<PlaylistItem  trackUrl={constant} stared_user={constant.stared_user} id={constant.id} name={constant.name} author={constant.author} album={constant.album} duration_in_seconds={constant.duration_in_seconds} user_id={789} />, { wrapper: storeRef.wrapper });
    expect(await screen.findByText(/Classical Metal Workout/i)).toBeInTheDocument();
  });
   it("should show requested catalog", async () => {
    render(<SidebarItem plnumber={1} text={constant.genre} /> , { wrapper: storeRef.wrapper });
    expect(await screen.findByText(/Рок музыка/i)).toBeInTheDocument();
  })


 it("should login", async () => {
   render(
      <MemoryRouter>
        <Login email='glo40@mail.ru' password='qwe123123'/>
      </MemoryRouter>,{ wrapper: loginRef.wrapper }
    )
   fireEvent.click(await screen.findByText("Войти"));
   await render(<PlaylistItem  trackUrl={constant} stared_user={constant.stared_user} id={constant.id} name={constant.name} author={constant.author} album={constant.album} duration_in_seconds={constant.duration_in_seconds} />, { wrapper: storeRef.wrapper })
   server.use(
     rest.post('https://painassasin.online/user/login/', (req, res, ctx) => {
       return res(
         ctx.json([{"id": 789,"username": "glo40","first_name": "","last_name": "","email": "glo40@mail.ru"}])
       );
     })
   );

   expect(await screen.findByText("Classical Metal Workout")).toBeInTheDocument();
 });
 it("should register", async () => {
   render(
      <MemoryRouter>
        <Register username='glo40' email='glo40@mail.ru' password='qwe123123'/>
      </MemoryRouter>,{ wrapper: loginRef.wrapper }
    )
   fireEvent.click(await screen.findByText("Зарегистрироваться"));
   await render(<PlaylistItem  trackUrl={constant} stared_user={constant.stared_user} id={constant.id} name={constant.name} author={constant.author} album={constant.album} duration_in_seconds={constant.duration_in_seconds} />, { wrapper: storeRef.wrapper })
   server.use(
     rest.post('https://painassasin.online/user/login/', (req, res, ctx) => {
       return res(
         ctx.json([{"id": 789,"username": "glo40","first_name": "","last_name": "","email": "glo40@mail.ru"}])
       );
     })
   );

   expect(await screen.findByText("Classical Metal Workout")).toBeInTheDocument();
 });
;
  it("should update todo item by click", async () => {
    render(<PlaylistItem  trackUrl={constant} stared_user={constant.stared_user} id={constant.id} name={constant.name} author={constant.author} album={constant.album} duration_in_seconds={constant.duration_in_seconds} />, { wrapper: storeRef.wrapper });
    fireEvent.click(await screen.findByRole("svgHeart"));

    server.use(
      rest.post('https://painassasin.online/catalog/track/33/favorite/', (req, res, ctx) => {
        return res(
          ctx.json(['trak is added'])
        );
      })
    );
    expect(await screen.findByRole("svgHeart")).toBeInTheDocument();
  });
});
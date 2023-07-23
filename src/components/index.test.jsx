import React from "react";
import { setupApiStore } from "../tests-utils";
import { PlaylistItem } from "./PlaylistItem"; 
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { tracksApi } from "../services/tracks";

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
];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store
const storeRef = setupApiStore(tracksApi);

describe("Tracks feature", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should show requested data", async () => {
   console.log(handlers);
   console.log(handlers.ctx.json());
    render(<PlaylistItem name={'Classical Metal Workout'}/>, { wrapper: storeRef.wrapper });
    expect(await screen.findByText(/Classical Metal Workout/i)).toBeInTheDocument();
  });
});
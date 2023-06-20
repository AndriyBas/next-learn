import { Event } from "@/data/Event";

export async function getAllEvents(): Promise<Event[]> {
  // const some = await new Promise((resolve: (val: unknown) => void, reject) => {
  //   setTimeout(() => {
  //     resolve("");
  //   }, 3000);
  // });
  return fetch(
    "https://instamood-9a9c3-default-rtdb.firebaseio.com/events.json"
  )
    .then((r) => r.json())
    .then((data) =>
      Object.keys(data).map((key) => ({ id: key, ...data[key] }))
    );
}

export async function getFeaturedEvents() {
  return getAllEvents().then((events) => events.filter((e) => e.isFeatured));
}

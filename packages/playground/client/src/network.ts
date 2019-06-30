import { Examples } from "../../shared/src/types";

export function fetchExamples() {
  return fetch(`/api/examples`, {
    credentials: "include",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(res => res.json() as Promise<Examples>)
    .then(({ result }) => result);
}

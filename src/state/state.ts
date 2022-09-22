import { atom } from "recoil";

export const sidebarIsOpenState = atom({
  key: "sidebarIsOpenState",
  default: false,
});

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "",
});

export const threadsState = atom({
  key: "threadsState",
  default: ["blahblahblah1", "blahblahblah2", "blahblahblah3"],
});

export const commentsState = atom({
  key: "commentsState",
  default: {
    blahblahblah1: [
      {
        id: "blah1",
        thread: "blahblahblah1",
        text: "Couldn't have said it better myself!",
        author: "Jack",
        date: "Just now",
      },
    ],
    blahblahblah2: [
      {
        id: "blah2",
        thread: "blahblahblah2",
        text: "I really love what you did here",
        author: "Awaddd",
        date: "2 hours ago",
      },
    ],
    blahblahblah3: [
      {
        id: "blah3",
        thread: "blahblahblah3",
        text: "Well said! I agree with everything you said... well, almost everything.",
        author: "Tom",
        date: "30 minutes ago",
      },
      {
        id: "blah4",
        thread: "blahblahblah3",
        text: "I think we need to work on our thesis man",
        author: "Nelson Smurf",
        date: "1 day ago",
        replyTo: "blah3",
      },
      {
        id: "blah5",
        thread: "blahblahblah3",
        text: "Word",
        author: "Nelson Smurf",
        date: "1 day ago",
        replyTo: "blah4",
      },
    ],
  },
});

import { atom } from "recoil";

export const sidebarIsOpenState = atom({
  key: "sidebarIsOpenState",
  default: false,
});

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "",
});

export const commentsState = atom({
  key: "commentsState",
  default: [
    {
      text: "Couldn't have said it better myself!",
      author: "Jack",
      date: "Just now",
    },
    {
      text: "Well said! I agree with everything you said... well, almost everything.",
      author: "Tom",
      date: "30 minutes ago",
    },
    {
      text: "I really love what you did here",
      author: "Awaddd",
      date: "2 hours ago",
    },
    {
      text: "I think we need to work on our thesis man",
      author: "Nelson Smurf",
      date: "1 day ago",
    },
  ],
});

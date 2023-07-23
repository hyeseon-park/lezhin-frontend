import { rest } from "msw";
import romancePage1 from "./data/romance/page_1.json";
import romancePage2 from "./data/romance/page_2.json";
import romancePage3 from "./data/romance/page_3.json";
import romancePage4 from "./data/romance/page_4.json";
import romancePage5 from "./data/romance/page_5.json";
import dramaPage1 from "./data/drama/page_1.json";
import dramaPage2 from "./data/drama/page_2.json";
import dramaPage3 from "./data/drama/page_3.json";
import dramaPage4 from "./data/drama/page_4.json";
import dramaPage5 from "./data/drama/page_5.json";

export const handlers = [
  rest.get("/api/comics/romance", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    switch (page) {
      case "1":
        return res(ctx.status(200), ctx.json(romancePage1));
      case "2":
        return res(ctx.status(200), ctx.json(romancePage2));
      case "3":
        return res(ctx.status(200), ctx.json(romancePage3));
      case "4":
        return res(ctx.status(200), ctx.json(romancePage4));
      case "5":
        return res(ctx.status(200), ctx.json(romancePage5));
      default:
        return res(ctx.status(404));
    }
  }),
  rest.get("/api/comics/drama", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    switch (page) {
      case "1":
        return res(ctx.status(200), ctx.json(dramaPage1));
      case "2":
        return res(ctx.status(200), ctx.json(dramaPage2));
      case "3":
        return res(ctx.status(200), ctx.json(dramaPage3));
      case "4":
        return res(ctx.status(200), ctx.json(dramaPage4));
      case "5":
        return res(ctx.status(200), ctx.json(dramaPage5));
      default:
        return res(ctx.status(404));
    }
  }),
];

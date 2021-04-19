import { SetStartOfWeek } from "../Lib/time";

var action = new PlugIn.Action
  (function (selection : Selection) {

  flattenedProjects.filter((e) => e.status === Project.Status.Active).forEach((e) => {
    e.nextReviewDate = SetStartOfWeek(e.nextReviewDate);
  });
});

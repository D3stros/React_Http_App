import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://34691a7aef334e418d957eba69143097@sentry.io/1727336"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};

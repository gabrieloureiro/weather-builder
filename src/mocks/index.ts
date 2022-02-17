export {};

if (typeof window === "undefined") {
  const { server } = require("./workers/server");
  server.listen();
} else {
  const { worker } = require("./workers/browser");
  worker.start({
    quiet: false,
    onUnhandledRequest: "bypass",
  });
}

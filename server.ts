import { Admin } from "./Admin";

async function init() {
    const admin = new Admin();
    await admin.connect();
    await admin.createTopic("rider-updates");
    await admin.disconnect();
}

init();
import { Event } from "./EventType";
import { Producer } from "./producer/Producer";

const TOPIC = "rider-updates";

async function init() {

    const producer = new Producer();

    await producer.connect();

    const event: Event = {
        name: TOPIC,
        loc: process.argv[2]
    }

    console.log(event);

    await producer.send(TOPIC, event);

    await producer.disconnect();
}

init();
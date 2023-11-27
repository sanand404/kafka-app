import { Consumer } from "./consumer/Consumer";

async function init() {

    const groupId = process.argv[2];

    const consumer = new Consumer({
        groupId: groupId
    });

    await consumer.connect();

    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    });

    const consoleMessage = async (arg: any) => {
        console.log(`${arg.topic}: PART:${arg.partition} :: ${arg.message.value.toString()}`);
    }

    await consumer.run(consoleMessage);
}

init();
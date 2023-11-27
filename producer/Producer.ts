import { IKafkaProducer } from "./IKafkaProducer";
import client from "../kafka/KafkaClient";
import { Event } from "../EventType";


export class Producer implements IKafkaProducer<Event> {

    private producer;

    constructor() {
        this.producer = client.getKafka.producer();
    }

    async connect(): Promise<void> {
        await this.producer.connect();
        console.log("Connected");
    }

    async disconnect(): Promise<void> {
        await this.producer.disconnect();
        console.log("Disconnected");
    }

    async send(topic: string, event: Event): Promise<void> {
        await this.producer.send({
            topic: "rider-updates",
            messages: [
                { key: topic, value: JSON.stringify(JSON.stringify(event)), partition: event.loc === "north" ? 1 : 0 }
            ]
        });
        console.log("Event send successfully");
    }
}
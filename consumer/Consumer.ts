import { IConsumer } from "./IConsumer";
import client from "../kafka/KafkaClient";

export type ConsumerConfig = {
    groupId: string
};

export type SubscribeConfig = {
    topics: string[],
    fromBeginning: boolean
}

export class Consumer implements IConsumer {

    private consumer;

    constructor(config: ConsumerConfig) {
        this.consumer = client.getKafka.consumer(config);
    }

    async subscribe(config: SubscribeConfig): Promise<void> {
        await this.consumer.subscribe(config);
    }

    async run(handler: (payload: any) => Promise<void>) {
        await this.consumer.run({
            eachMessage: handler
        });
    }

    async connect(): Promise<void> {
        await this.consumer.connect();
    }

    async disconnect(): Promise<void> {
        await this.consumer.disconnect();
    }

}
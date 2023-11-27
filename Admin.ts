import { ITopicConfig } from "kafkajs";
import { IKafka } from "./kafka/IKafka";
import client from "./kafka/KafkaClient";

export class Admin implements IKafka {
    private adminClient;

    constructor() {
        this.adminClient = client.getKafka.admin();
    }
    
    async connect(): Promise<void> {
        await this.adminClient.connect();
        console.log("Connected");
    }

    async disconnect(): Promise<void> {
        await this.adminClient.disconnect();
        console.log("Disconnected");
    }


    async createTopic(topic: string) {

        const topicConfig: ITopicConfig[] = [{
            topic,
            numPartitions: 2
        }];

        await this.adminClient.createTopics({
            topics: topicConfig
        });
        console.log(`[${topic}] topic created successfully`)
    }

}
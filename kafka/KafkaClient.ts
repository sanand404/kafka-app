import { Kafka } from "kafkajs";

class KafkaClient {

    private kafka: Kafka;

    constructor() {
        console.log("Creating KAFKA CLIENT....")
        this.kafka = new Kafka({
            clientId: "kafka-app",
            brokers: ["localhost:9092"]
        });
    }

    get getKafka() {
        return this.kafka;
    }

}

const client = new KafkaClient();

export default client;
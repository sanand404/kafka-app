import { Event } from "../EventType";
import { IKafka } from "../kafka/IKafka";

export interface IKafkaProducer<T extends Event> extends IKafka {
    send(topic: string, event: T): Promise<void>
}
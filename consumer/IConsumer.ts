import { SubscribeConfig } from "./Consumer";
import { IKafka } from "../kafka/IKafka";

export interface IConsumer extends IKafka {
    subscribe(config: SubscribeConfig): Promise<void>
}
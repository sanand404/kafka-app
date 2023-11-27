export interface IKafka {
    connect(): Promise<void>
    disconnect(): Promise<void>
}
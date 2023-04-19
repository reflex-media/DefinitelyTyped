import { SendMessageCommandOutput } from '@aws-sdk/client-sqs';

declare function dispatch(payload: object, queueName: string): Promise<SendMessageCommandOutput>;

export default dispatch;

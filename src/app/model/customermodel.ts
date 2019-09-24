export interface ICustomer {
    topicID: number;
    topicName: string;
    topicFeedbacks: [{
        feedID: number;
        respondent: string;
        feedback: string;
    }];
}

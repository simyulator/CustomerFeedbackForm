export interface ICustomer {
    topicID: number;
    topicName: string;
    topicDescription: string;
    topicFeedbacks: [{
        feedID: number;
        respondent: string;
        email: string;
        feedback: string;
    }];
}

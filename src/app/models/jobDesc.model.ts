// tslint:disable-next-line:class-name
export class jobDesc {
    juid: string;
    jobName: string;
    jobDescription: string;
    reqExperience: string;
    reqSkills: string;
    expectedJoining: string;

    constructor(juid: string, jobName: string, jobDescription: string, reqExperience: string, reqSkills: string, expectedJoining: string) {
        this.juid = 'JD_' + juid;
        this.jobName = jobName;
        this.jobDescription = jobDescription;
        this.reqExperience = reqExperience;
        this.reqSkills = reqSkills;
        this.expectedJoining = expectedJoining;
    }
}

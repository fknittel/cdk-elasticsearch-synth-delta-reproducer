import * as cdk from '@aws-cdk/core';
import * as es from '@aws-cdk/aws-elasticsearch';

export class CdkReproduceSynthDeltaStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new es.Domain(this, 'Domain', {
            version: es.ElasticsearchVersion.V7_1,
            capacity: {
                masterNodes: 5,
                dataNodes: 20
            },
            ebs: {
                volumeSize: 20
            },
            zoneAwareness: {
                availabilityZoneCount: 3
            },
            logging: {
                slowSearchLogEnabled: true,
                appLogEnabled: true,
                slowIndexLogEnabled: true,
            },
        });
    }
}

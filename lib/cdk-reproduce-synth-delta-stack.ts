import * as cdk from '@aws-cdk/core';
import * as opensearch from '@aws-cdk/aws-opensearchservice';

export class CdkReproduceSynthDeltaStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new opensearch.Domain(this, 'Domain', {
            version: opensearch.EngineVersion.ELASTICSEARCH_7_1,
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

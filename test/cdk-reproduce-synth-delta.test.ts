import {beASupersetOfTemplate, expect as expectCDK} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkReproduceSynthDelta from '../lib/cdk-reproduce-synth-delta-stack';

test('Elasticsearch provides certain lambda resources', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkReproduceSynthDelta.CdkReproduceSynthDeltaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(beASupersetOfTemplate({
        "Resources": {
            "AWS679f53fac002430cb0da5b7982bd22872D164C4C": {
                "Type": "AWS::Lambda::Function",
                "Properties": {
                    "Code": {
                        "S3Bucket": {
                            "Ref": "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcS3Bucket02FC0B28"
                        },
                        "S3Key": {
                            "Fn::Join": [
                                "",
                                [
                                    {
                                        "Fn::Select": [
                                            0,
                                            {
                                                "Fn::Split": [
                                                    "||",
                                                    {
                                                        "Ref": "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcS3VersionKey547E84F8"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "Fn::Select": [
                                            1,
                                            {
                                                "Fn::Split": [
                                                    "||",
                                                    {
                                                        "Ref": "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcS3VersionKey547E84F8"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            ]
                        }
                    },
                    "Role": {
                        "Fn::GetAtt": [
                            "AWS679f53fac002430cb0da5b7982bd2287ServiceRoleC1EA0FF2",
                            "Arn"
                        ]
                    },
                    "Handler": "index.handler",
                    "Runtime": "nodejs12.x",
                    "Timeout": 120
                },
                "DependsOn": [
                    "AWS679f53fac002430cb0da5b7982bd2287ServiceRoleC1EA0FF2"
                ],
            },
        },
        "Parameters": {
            "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcS3Bucket02FC0B28": {
                "Type": "String",
                "Description": "S3 bucket for asset \"4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbc\""
            },
            "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcS3VersionKey547E84F8": {
                "Type": "String",
                "Description": "S3 key for asset version \"4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbc\""
            },
            "AssetParameters4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbcArtifactHashF236251A": {
                "Type": "String",
                "Description": "Artifact hash for asset \"4074092ab8b435c90a773e082601fa36def54c91cadfae59451bd0beda547cbc\""
            }
        },
    }))
});

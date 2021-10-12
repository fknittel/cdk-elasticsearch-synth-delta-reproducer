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
                            "Ref": "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797S3BucketBEE108A9"
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
                                                        "Ref": "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797S3VersionKeyA877E3C9"
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
                                                        "Ref": "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797S3VersionKeyA877E3C9"
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
                ]
            },
        },
        "Parameters": {
            "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797S3BucketBEE108A9": {
                "Type": "String",
                "Description": "S3 bucket for asset \"f3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797\""
            },
            "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797S3VersionKeyA877E3C9": {
                "Type": "String",
                "Description": "S3 key for asset version \"f3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797\""
            },
            "AssetParametersf3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797ArtifactHashAAFCA968": {
                "Type": "String",
                "Description": "Artifact hash for asset \"f3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797\""
            }
        },
    }))
});

import * as pulumi from "@pulumi/pulumi";

export default function createLabel() {
    return [pulumi.getStack(), pulumi.getProject()].join("-");
}

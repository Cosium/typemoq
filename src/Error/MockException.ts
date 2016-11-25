﻿import { Exception } from "./Exception";

export enum MockExceptionReason {
    NoSetup = <any>"no setup expression found for",
    MoreThanOneSetup = <any>"more than one setup expression found for",
    InvalidSetup = <any>"invalid setup expression",
    InvalidMatcher = <any>"invalid matching expression",
    InvalidProxyArg = <any>"invalid proxy argument",
    UnknownGlobalType = <any>"unknown global type",
    CallCountVerificationFailed = <any>"invocation count verification failed",
    CallOrderVerificationFailed = <any>"invocation order verification failed",
    InvalidDynamicProxyRuntime = <any>"invalid dynamic proxy runtime"
}

export class MockException extends Exception {
    constructor(
        public readonly reason: MockExceptionReason,
        public readonly ctx: any,
        public readonly message: string = undefined) {
        super("MockException", message);
    }

    toString(): string {
        let errMsg = `${this.name} - ${this.reason}`;
        if(this.message)
            errMsg = `${errMsg} (${this.message})`;
        return errMsg;
    }
}
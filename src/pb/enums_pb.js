// source: enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = globalThis;

goog.exportSymbol('proto.pb.ApplicationStatus', null, global);
goog.exportSymbol('proto.pb.CertificateCategory', null, global);
/**
 * @enum {number}
 */
proto.pb.ApplicationStatus = {
  APPLICATION_STATUS_PENDING: 0,
  APPLICATION_STATUS_REJECTED: 1,
  APPLICATION_STATUS_NEEDMOREINFO: 2,
  APPLICATION_STATUS_APPROVED: 3,
  APPLICATION_STATUS_BANED: 4
};

/**
 * @enum {number}
 */
proto.pb.CertificateCategory = {
  TEACHING: 0,
  COMPETITION: 1,
  OTHER: 2
};

goog.object.extend(exports, proto.pb);

// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace cloudidentity_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Identity API
   *
   * API for provisioning and managing identity resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudidentity = google.cloudidentity('v1');
   *
   * @namespace cloudidentity
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudidentity
   */
  export class Cloudidentity {
    context: APIRequestContext;
    devices: Resource$Devices;
    groups: Resource$Groups;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.devices = new Resource$Devices(this.context);
      this.groups = new Resource$Groups(this.context);
    }
  }

  /**
   * An EntityKey uniquely identifies an Entity. Namespaces are used to provide isolation for IDs. A single ID can be reused across namespaces but the combination of a namespace and an ID must be unique.
   */
  export interface Schema$EntityKey {
    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    id?: string | null;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `&quot;identitysources/{identity_source_id}&quot;` is created corresponding to every Identity Source `identity_source_id`.
     */
    namespace?: string | null;
  }
  /**
   * Resource representing the Android specific attributes of a Device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1AndroidAttributes {
    /**
     * Whether applications from unknown sources can be installed on device.
     */
    enabledUnknownSources?: boolean | null;
    /**
     * Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.
     */
    ownerProfileAccount?: boolean | null;
    /**
     * Ownership privileges on device.
     */
    ownershipPrivilege?: string | null;
    /**
     * Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the &quot;Enforce Work Profile&quot; policy.
     */
    supportsWorkProfile?: boolean | null;
  }
  /**
   * Request message for approving the device to access user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for approving the device to access user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Request message for blocking account on device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for blocking the device from accessing user data.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Request message for cancelling an unfinished device wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for cancelling an unfinished device wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse {
    /**
     * Resultant Device object for the action. Note that asset tags will not be returned in the device object.
     */
    device?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  /**
   * Request message for cancelling an unfinished user account wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for cancelling an unfinished user account wipe.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ClientState {
    /**
     * The caller can specify asset tags for this resource
     */
    assetTags?: string[] | null;
    /**
     * The compliance state of the resource as specified by the API client.
     */
    complianceState?: string | null;
    /**
     * Output only. The time the client state data was created.
     */
    createTime?: string | null;
    /**
     * This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
     */
    customId?: string | null;
    /**
     * The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
     */
    etag?: string | null;
    /**
     * The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.
     */
    healthScore?: string | null;
    /**
     * The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
     */
    keyValuePairs?: {
      [
        key: string
      ]: Schema$GoogleAppsCloudidentityDevicesV1CustomAttributeValue;
    } | null;
    /**
     * Output only. The time the client state data was last updated.
     */
    lastUpdateTime?: string | null;
    /**
     * The management state of the resource as specified by the API client.
     */
    managed?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. For partners belonging to the &quot;BeyondCorp Alliance&quot;, this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer_id}-suffix`, where `customer_id` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization&#39;s customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter &#39;C&#39;. The customer ID to be used in this API is the string after the letter &#39;C&#39; (not including &#39;C&#39;)
     */
    name?: string | null;
    /**
     * Output only. The owner of the ClientState
     */
    ownerType?: string | null;
    /**
     * A descriptive cause of the health score.
     */
    scoreReason?: string | null;
  }
  /**
   * Additional custom attribute values may be one of these types
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1CustomAttributeValue {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents a double value.
     */
    numberValue?: number | null;
    /**
     * Represents a string value.
     */
    stringValue?: string | null;
  }
  /**
   *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1Device {
    /**
     * Output only. Attributes specific to Android devices.
     */
    androidSpecificAttributes?: Schema$GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    /**
     * Asset tag of the device.
     */
    assetTag?: string | null;
    /**
     * Output only. Baseband version of the device.
     */
    basebandVersion?: string | null;
    /**
     * Output only. Device bootloader version. Example: 0.6.7.
     */
    bootloaderVersion?: string | null;
    /**
     * Output only. Device brand. Example: Samsung.
     */
    brand?: string | null;
    /**
     * Output only. Build number of the device.
     */
    buildNumber?: string | null;
    /**
     * Output only. Represents whether the Device is compromised.
     */
    compromisedState?: string | null;
    /**
     * Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.
     */
    createTime?: string | null;
    /**
     * Output only. Type of device.
     */
    deviceType?: string | null;
    /**
     * Output only. Whether developer options is enabled on device.
     */
    enabledDeveloperOptions?: boolean | null;
    /**
     * Output only. Whether USB debugging is enabled on device.
     */
    enabledUsbDebugging?: boolean | null;
    /**
     * Output only. Device encryption state.
     */
    encryptionState?: string | null;
    /**
     * Output only. IMEI number of device if GSM device; empty otherwise.
     */
    imei?: string | null;
    /**
     * Output only. Kernel version of the device.
     */
    kernelVersion?: string | null;
    /**
     * Most recent time when device synced with this service.
     */
    lastSyncTime?: string | null;
    /**
     * Output only. Management state of the device
     */
    managementState?: string | null;
    /**
     * Output only. Device manufacturer. Example: Motorola.
     */
    manufacturer?: string | null;
    /**
     * Output only. MEID number of device if CDMA device; empty otherwise.
     */
    meid?: string | null;
    /**
     * Output only. Model name of device. Example: Pixel 3.
     */
    model?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device.
     */
    name?: string | null;
    /**
     * Output only. Mobile or network operator of device, if available.
     */
    networkOperator?: string | null;
    /**
     * Output only. OS version of the device. Example: Android 8.1.0.
     */
    osVersion?: string | null;
    /**
     * Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account&#39;s domain has only one account. Examples: &quot;com.example&quot;, &quot;xyz.com&quot;.
     */
    otherAccounts?: string[] | null;
    /**
     * Output only. Whether the device is owned by the company or an individual
     */
    ownerType?: string | null;
    /**
     * Output only. OS release version. Example: 6.0.
     */
    releaseVersion?: string | null;
    /**
     * Output only. OS security patch update time on device.
     */
    securityPatchTime?: string | null;
    /**
     * Serial Number of device. Example: HT82V1A01076.
     */
    serialNumber?: string | null;
    /**
     * WiFi MAC addresses of device.
     */
    wifiMacAddresses?: string[] | null;
  }
  /**
   * Represents a user&#39;s use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user&#39;s use of a Device
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1DeviceUser {
    /**
     * Compromised State of the DeviceUser object
     */
    compromisedState?: string | null;
    /**
     * When the user first signed in to the device
     */
    createTime?: string | null;
    /**
     * Output only. Most recent time when user registered with this service.
     */
    firstSyncTime?: string | null;
    /**
     * Output only. Default locale used on device, in IETF BCP-47 format.
     */
    languageCode?: string | null;
    /**
     * Output only. Last time when user synced with policies.
     */
    lastSyncTime?: string | null;
    /**
     * Output only. Management state of the user on the device.
     */
    managementState?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{user_id}`, where user_id is the ID of the user associated with the user session.
     */
    name?: string | null;
    /**
     * Password state of the DeviceUser object
     */
    passwordState?: string | null;
    /**
     * Output only. User agent on the device for this specific user
     */
    userAgent?: string | null;
    /**
     * Email address of the user registered on the device.
     */
    userEmail?: string | null;
  }
  /**
   * Response message that is returned in ListClientStates.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse {
    /**
     * Client states meeting the list restrictions.
     */
    clientStates?: Schema$GoogleAppsCloudidentityDevicesV1ClientState[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message that is returned from the ListDevices method.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse {
    /**
     * Devices meeting the list restrictions.
     */
    devices?: Schema$GoogleAppsCloudidentityDevicesV1Device[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message that is returned from the ListDeviceUsers method.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse {
    /**
     * Devices meeting the list restrictions.
     */
    deviceUsers?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response containing resource names of the DeviceUsers associated with the caller&#39;s credentials.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse {
    /**
     * The obfuscated customer Id that may be passed back to other Devices API methods such as List, Get, etc.
     */
    customer?: string | null;
    /**
     * [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID
     */
    names?: string[] | null;
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for wiping all data on the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for wiping all data on the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceResponse {
    /**
     * Resultant Device object for the action. Note that asset tags will not be returned in the device object.
     */
    device?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  /**
   * Request message for starting an account wipe on device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use `customers/my_customer` If you&#39;re using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string | null;
  }
  /**
   * Response message for wiping the user&#39;s account from the device.
   */
  export interface Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse {
    /**
     * Resultant DeviceUser object for the action.
     */
    deviceUser?: Schema$GoogleAppsCloudidentityDevicesV1DeviceUser;
  }
  /**
   * Resource representing a Group.
   */
  export interface Schema$Group {
    /**
     * Output only. The time when the Group was created. Output only.
     */
    createTime?: string | null;
    /**
     * An extended description to help users determine the purpose of a Group. For example, you can include information about who should join the Group, the types of messages to send to the Group, links to FAQs about the Group, or related Groups. Maximum length is 4,096 characters.
     */
    description?: string | null;
    /**
     * The Group&#39;s display name.
     */
    displayName?: string | null;
    /**
     * Required. Immutable. EntityKey of the Group. Must be set when creating a Group, read-only afterwards.
     */
    groupKey?: Schema$EntityKey;
    /**
     * Required. `Required`. Labels for Group resource. For creating Groups under a namespace, set label key to &#39;labels/system/groups/external&#39; and label value as empty.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group. Must be left blank while creating a Group.
     */
    name?: string | null;
    /**
     * Required. Immutable. The entity under which this Group resides in Cloud Identity resource hierarchy. Must be set when creating a Group, read-only afterwards. Currently allowed types: `identitysources`.
     */
    parent?: string | null;
    /**
     * Output only. The time when the Group was last updated. Output only.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for ListGroups operation.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * Groups returned in response to list request. The results are not sorted.
     */
    groups?: Schema$Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListMembershipsResponse {
    /**
     * List of Memberships.
     */
    memberships?: Schema$Membership[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$LookupGroupNameResponse {
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string | null;
  }
  export interface Schema$LookupMembershipNameResponse {
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership being looked up. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     */
    name?: string | null;
  }
  /**
   * Resource representing a Membership within a Group
   */
  export interface Schema$Membership {
    /**
     * Output only. Creation timestamp of the Membership. Output only.
     */
    createTime?: string | null;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership in the format: `groups/{group_id}/memberships/{member_id}`, where group_id is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member Must be left blank while creating a Membership.
     */
    name?: string | null;
    /**
     * Required. Immutable. EntityKey of the entity to be added as the member. Must be set while creating a Membership, read-only afterwards. Currently allowed entity types: `Users`, `Groups`.
     */
    preferredMemberKey?: Schema$EntityKey;
    /**
     * Roles for a member within the Group. Currently supported MembershipRoles: `&quot;MEMBER&quot;`.
     */
    roles?: Schema$MembershipRole[];
    /**
     * Output only. The type of the membership.
     */
    type?: string | null;
    /**
     * Output only. Last updated timestamp of the Membership. Output only.
     */
    updateTime?: string | null;
  }
  /**
   * Resource representing a role within a Membership.
   */
  export interface Schema$MembershipRole {
    /**
     * MembershipRole in string format. Currently supported MembershipRoles: `&quot;MEMBER&quot;`.
     */
    name?: string | null;
  }
  /**
   * The request message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesRequest {
    /**
     * The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.
     */
    addRoles?: Schema$MembershipRole[];
    /**
     * The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.
     */
    removeRoles?: string[] | null;
  }
  /**
   * The response message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesResponse {
    /**
     * The `Membership` resource after modifying its `MembershipRole`s.
     */
    membership?: Schema$Membership;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  export interface Schema$SearchGroupsResponse {
    /**
     * List of Groups satisfying the search query.
     */
    groups?: Schema$Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for specified query.
     */
    nextPageToken?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }

  export class Resource$Devices {
    context: APIRequestContext;
    deviceUsers: Resource$Devices$Deviceusers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deviceUsers = new Resource$Devices$Deviceusers(this.context);
    }

    /**
     * cloudidentity.devices.cancelWipe
     * @desc Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.cancelWipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.cancelWipe
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancelWipe(
      params?: Params$Resource$Devices$Cancelwipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Cancelwipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(callback: BodyResponseCallback<Schema$Operation>): void;
    cancelWipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Cancelwipe
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Cancelwipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Cancelwipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancelWipe').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.create
     * @desc Creates a device. Only company-owned device may be created.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.create({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSpecificAttributes": {},
     *       //   "assetTag": "my_assetTag",
     *       //   "basebandVersion": "my_basebandVersion",
     *       //   "bootloaderVersion": "my_bootloaderVersion",
     *       //   "brand": "my_brand",
     *       //   "buildNumber": "my_buildNumber",
     *       //   "compromisedState": "my_compromisedState",
     *       //   "createTime": "my_createTime",
     *       //   "deviceType": "my_deviceType",
     *       //   "enabledDeveloperOptions": false,
     *       //   "enabledUsbDebugging": false,
     *       //   "encryptionState": "my_encryptionState",
     *       //   "imei": "my_imei",
     *       //   "kernelVersion": "my_kernelVersion",
     *       //   "lastSyncTime": "my_lastSyncTime",
     *       //   "managementState": "my_managementState",
     *       //   "manufacturer": "my_manufacturer",
     *       //   "meid": "my_meid",
     *       //   "model": "my_model",
     *       //   "name": "my_name",
     *       //   "networkOperator": "my_networkOperator",
     *       //   "osVersion": "my_osVersion",
     *       //   "otherAccounts": [],
     *       //   "ownerType": "my_ownerType",
     *       //   "releaseVersion": "my_releaseVersion",
     *       //   "securityPatchTime": "my_securityPatchTime",
     *       //   "serialNumber": "my_serialNumber",
     *       //   "wifiMacAddresses": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {().GoogleAppsCloudidentityDevicesV1Device} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Devices$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Devices$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.delete
     * @desc Deletes the specified device.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.delete({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     *     name: 'devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Devices$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Devices$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.get
     * @desc Retrieves the specified device.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.get({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     *     name: 'devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSpecificAttributes": {},
     *   //   "assetTag": "my_assetTag",
     *   //   "basebandVersion": "my_basebandVersion",
     *   //   "bootloaderVersion": "my_bootloaderVersion",
     *   //   "brand": "my_brand",
     *   //   "buildNumber": "my_buildNumber",
     *   //   "compromisedState": "my_compromisedState",
     *   //   "createTime": "my_createTime",
     *   //   "deviceType": "my_deviceType",
     *   //   "enabledDeveloperOptions": false,
     *   //   "enabledUsbDebugging": false,
     *   //   "encryptionState": "my_encryptionState",
     *   //   "imei": "my_imei",
     *   //   "kernelVersion": "my_kernelVersion",
     *   //   "lastSyncTime": "my_lastSyncTime",
     *   //   "managementState": "my_managementState",
     *   //   "manufacturer": "my_manufacturer",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "name": "my_name",
     *   //   "networkOperator": "my_networkOperator",
     *   //   "osVersion": "my_osVersion",
     *   //   "otherAccounts": [],
     *   //   "ownerType": "my_ownerType",
     *   //   "releaseVersion": "my_releaseVersion",
     *   //   "securityPatchTime": "my_securityPatchTime",
     *   //   "serialNumber": "my_serialNumber",
     *   //   "wifiMacAddresses": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1Device>;
    get(
      params: Params$Resource$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1Device
      >
    ): void;
    get(
      params: Params$Resource$Devices$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1Device
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1Device
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Get
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsCloudidentityDevicesV1Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1Device>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1Device>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1Device>(
          parameters
        );
      }
    }

    /**
     * cloudidentity.devices.list
     * @desc Lists/Searches devices.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.list({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of devices. [Help Center article link](https://support.google.com/a/answer/7549103)
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Optional. The view to use for the List request.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string=} params.filter Optional. Additional restrictions when fetching list of devices. [Help Center article link](https://support.google.com/a/answer/7549103)
     * @param {string=} params.orderBy Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending.
     * @param {integer=} params.pageSize Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string=} params.pageToken Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     * @param {string=} params.view Optional. The view to use for the List request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
    >;
    list(
      params: Params$Resource$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
      >
    ): void;
    list(
      params: Params$Resource$Devices$List,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$List
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListDevicesResponse
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.wipe
     * @desc Wipes all data on the specified device.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.wipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.wipe
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1WipeDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wipe(
      params?: Params$Resource$Devices$Wipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wipe(
      params: Params$Resource$Devices$Wipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(
      params: Params$Resource$Devices$Wipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(callback: BodyResponseCallback<Schema$Operation>): void;
    wipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Wipe
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Wipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Wipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:wipe').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Devices$Cancelwipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest;
  }
  export interface Params$Resource$Devices$Create extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1Device;
  }
  export interface Params$Resource$Devices$Delete extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Get extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$List extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of devices. [Help Center article link](https://support.google.com/a/answer/7549103)
     */
    filter?: string;
    /**
     * Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. The view to use for the List request.
     */
    view?: string;
  }
  export interface Params$Resource$Devices$Wipe extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceRequest;
  }

  export class Resource$Devices$Deviceusers {
    context: APIRequestContext;
    clientStates: Resource$Devices$Deviceusers$Clientstates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clientStates = new Resource$Devices$Deviceusers$Clientstates(
        this.context
      );
    }

    /**
     * cloudidentity.devices.deviceUsers.approve
     * @desc Approves device to access user data.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.approve({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.approve
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Devices$Deviceusers$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(
      params: Params$Resource$Devices$Deviceusers$Approve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Operation>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Approve
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.block
     * @desc Blocks device from accessing user data
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.block({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.block
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    block(
      params?: Params$Resource$Devices$Deviceusers$Block,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    block(
      params: Params$Resource$Devices$Deviceusers$Block,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    block(callback: BodyResponseCallback<Schema$Operation>): void;
    block(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Block
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Block;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Block;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:block').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.cancelWipe
     * @desc Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.cancelWipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.cancelWipe
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancelWipe(
      params?: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(
      params: Params$Resource$Devices$Deviceusers$Cancelwipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelWipe(callback: BodyResponseCallback<Schema$Operation>): void;
    cancelWipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Cancelwipe
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Cancelwipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Cancelwipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancelWipe').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.delete
     * @desc Deletes the specified DeviceUser. This also revokes the user's access to device data.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.delete({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Devices$Deviceusers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Devices$Deviceusers$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.get
     * @desc Retrieves the specified DeviceUser
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.get({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compromisedState": "my_compromisedState",
     *   //   "createTime": "my_createTime",
     *   //   "firstSyncTime": "my_firstSyncTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "lastSyncTime": "my_lastSyncTime",
     *   //   "managementState": "my_managementState",
     *   //   "name": "my_name",
     *   //   "passwordState": "my_passwordState",
     *   //   "userAgent": "my_userAgent",
     *   //   "userEmail": "my_userEmail"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Deviceusers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
      >
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Get
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1DeviceUser>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1DeviceUser
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.list
     * @desc Lists/Searches DeviceUsers.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.list({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of devices. [HC article](https://support.google.com/a/answer/7549103)
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for devices in the response.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}
     *     parent: 'devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceUsers": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string=} params.filter Optional. Additional restrictions when fetching list of devices. [HC article](https://support.google.com/a/answer/7549103)
     * @param {string=} params.orderBy Optional. Order specification for devices in the response.
     * @param {integer=} params.pageSize Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string=} params.pageToken Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
     * @param {string} params.parent Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$Deviceusers$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
    >;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
      >
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$List,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$List
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deviceUsers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.lookup
     * @desc Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-identity.devices.lookup'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.lookup({
     *     // Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
     *     androidId: 'placeholder-value',
     *     // The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
     *     parent: 'devices/my-device/deviceUsers',
     *     // Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
     *     rawResourceId: 'placeholder-value',
     *     // The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customer": "my_customer",
     *   //   "names": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.androidId Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
     * @param {integer=} params.pageSize The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string=} params.pageToken A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
     * @param {string} params.parent Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
     * @param {string=} params.rawResourceId Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
     * @param {string=} params.userId The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Devices$Deviceusers$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
    >;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
      >
    ): void;
    lookup(
      params: Params$Resource$Devices$Deviceusers$Lookup,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
      >
    ): void;
    lookup(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
      >
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Lookup
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:lookup').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.wipe
     * @desc Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.wipe({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     *     name: 'devices/my-device/deviceUsers/my-deviceUser',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": "my_customer"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.wipe
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     * @param {().GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wipe(
      params?: Params$Resource$Devices$Deviceusers$Wipe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(
      params: Params$Resource$Devices$Deviceusers$Wipe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wipe(callback: BodyResponseCallback<Schema$Operation>): void;
    wipe(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Wipe
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Wipe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Wipe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:wipe').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Devices$Deviceusers$Approve
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Block
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Cancelwipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest;
  }
  export interface Params$Resource$Devices$Deviceusers$Delete
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Get
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$List
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of devices. [HC article](https://support.google.com/a/answer/7549103)
     */
    filter?: string;
    /**
     * Optional. Order specification for devices in the response.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}
     */
    parent?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Lookup
    extends StandardParameters {
    /**
     * Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
     */
    androidId?: string;
    /**
     * The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
     */
    parent?: string;
    /**
     * Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
     */
    rawResourceId?: string;
    /**
     * The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
     */
    userId?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Wipe
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest;
  }

  export class Resource$Devices$Deviceusers$Clientstates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudidentity.devices.deviceUsers.clientStates.get
     * @desc Gets the client state for the device user
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.get({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientStates/{partner_id}`, where device_id is the unique ID assigned to the Device, device_user_id is the unique ID assigned to the User and partner_id identifies the partner storing the data.
     *     name:
     *       'devices/my-device/deviceUsers/my-deviceUser/clientStates/my-clientState',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetTags": [],
     *   //   "complianceState": "my_complianceState",
     *   //   "createTime": "my_createTime",
     *   //   "customId": "my_customId",
     *   //   "etag": "my_etag",
     *   //   "healthScore": "my_healthScore",
     *   //   "keyValuePairs": {},
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "managed": "my_managed",
     *   //   "name": "my_name",
     *   //   "ownerType": "my_ownerType",
     *   //   "scoreReason": "my_scoreReason"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.clientStates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientStates/{partner_id}`, where device_id is the unique ID assigned to the Device, device_user_id is the unique ID assigned to the User and partner_id identifies the partner storing the data.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ClientState>;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ClientState
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ClientState
      >
    ): void;
    get(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ClientState
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ClientState
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$Get
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ClientState
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ClientState
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ClientState
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsCloudidentityDevicesV1ClientState>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsCloudidentityDevicesV1ClientState>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ClientState
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.clientStates.list
     * @desc Lists the client states for the given search query.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.list({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Optional. Additional restrictions when fetching list of client states.
     *     filter: 'placeholder-value',
     *     // Optional. Order specification for client states in the response.
     *     orderBy: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device}/deviceUsers/{deviceUser}
     *     parent: 'devices/my-device/deviceUsers/my-deviceUser',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientStates": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.clientStates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string=} params.filter Optional. Additional restrictions when fetching list of client states.
     * @param {string=} params.orderBy Optional. Order specification for client states in the response.
     * @param {string=} params.pageToken Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token.
     * @param {string} params.parent Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device}/deviceUsers/{deviceUser}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
    >;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
      >
    ): void;
    list(
      params: Params$Resource$Devices$Deviceusers$Clientstates$List,
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$List
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clientStates').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
        >(parameters);
      }
    }

    /**
     * cloudidentity.devices.deviceUsers.clientStates.patch
     * @desc Updates the client state for the device user
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.devices.deviceUsers.clientStates.patch({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     *     customer: 'placeholder-value',
     *     // Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer_id}-suffix`, where `customer_id` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     *     name:
     *       'devices/my-device/deviceUsers/my-deviceUser/clientStates/my-clientState',
     *     // Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetTags": [],
     *       //   "complianceState": "my_complianceState",
     *       //   "createTime": "my_createTime",
     *       //   "customId": "my_customId",
     *       //   "etag": "my_etag",
     *       //   "healthScore": "my_healthScore",
     *       //   "keyValuePairs": {},
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "managed": "my_managed",
     *       //   "name": "my_name",
     *       //   "ownerType": "my_ownerType",
     *       //   "scoreReason": "my_scoreReason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.devices.deviceUsers.clientStates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customer Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     * @param {string} params.name Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer_id}-suffix`, where `customer_id` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     * @param {string=} params.updateMask Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated.
     * @param {().GoogleAppsCloudidentityDevicesV1ClientState} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Devices$Deviceusers$Clientstates$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Devices$Deviceusers$Clientstates$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Deviceusers$Clientstates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Deviceusers$Clientstates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Devices$Deviceusers$Clientstates$Get
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientStates/{partner_id}`, where device_id is the unique ID assigned to the Device, device_user_id is the unique ID assigned to the User and partner_id identifies the partner storing the data.
     */
    name?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Clientstates$List
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Optional. Additional restrictions when fetching list of client states.
     */
    filter?: string;
    /**
     * Optional. Order specification for client states in the response.
     */
    orderBy?: string;
    /**
     * Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device}/deviceUsers/{deviceUser}
     */
    parent?: string;
  }
  export interface Params$Resource$Devices$Deviceusers$Clientstates$Patch
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
     */
    customer?: string;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer_id}-suffix`, where `customer_id` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
     */
    name?: string;
    /**
     * Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsCloudidentityDevicesV1ClientState;
  }

  export class Resource$Groups {
    context: APIRequestContext;
    memberships: Resource$Groups$Memberships;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.memberships = new Resource$Groups$Memberships(this.context);
    }

    /**
     * cloudidentity.groups.create
     * @desc Creates a Group.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.create({
     *     // Optional. The initial configuration option for the `Group`.
     *     initialGroupConfig: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "groupKey": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.initialGroupConfig Optional. The initial configuration option for the `Group`.
     * @param {().Group} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Groups$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Groups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Groups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.delete
     * @desc Deletes a Group.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.delete({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     *     name: 'groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Groups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Groups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.get
     * @desc Retrieves a Group.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.get({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     *     name: 'groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "groupKey": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Groups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Groups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    get(
      params: Params$Resource$Groups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(
      params: Params$Resource$Groups$Get,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Get
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Group> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Group>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * cloudidentity.groups.list
     * @desc Lists groups within a customer or a domain.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.list({
     *     // The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous list request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. Customer ID to list all groups from.
     *     parent: 'placeholder-value',
     *     // Group resource view to be returned. Defaults to [View.BASIC]().
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous list request, if any.
     * @param {string=} params.parent Required. Customer ID to list all groups from.
     * @param {string=} params.view Group resource view to be returned. Defaults to [View.BASIC]().
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Groups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Groups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGroupsResponse>;
    list(
      params: Params$Resource$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$List
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListGroupsResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.lookup
     * @desc Looks up [resource name](https://cloud.google.com/apis/design/resource_names) of a Group by its EntityKey.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.lookup({
     *     // The ID of the entity within the given namespace. The ID must be unique within its namespace.
     *     'groupKey.id': 'placeholder-value',
     *     // Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     *     'groupKey.namespace': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.groupKey.id The ID of the entity within the given namespace. The ID must be unique within its namespace.
     * @param {string=} params.groupKey.namespace Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params: Params$Resource$Groups$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Groups$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupGroupNameResponse>;
    lookup(
      params: Params$Resource$Groups$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Groups$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Lookup,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Lookup
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupGroupNameResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LookupGroupNameResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:lookup').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupGroupNameResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LookupGroupNameResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.patch
     * @desc Updates a Group.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.patch({
     *     // Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group. Must be left blank while creating a Group.
     *     name: 'groups/my-group',
     *     // Required. Editable fields: `display_name`, `description`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "groupKey": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group. Must be left blank while creating a Group.
     * @param {string=} params.updateMask Required. Editable fields: `display_name`, `description`
     * @param {().Group} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Groups$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Groups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Groups$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.search
     * @desc Searches for Groups.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.search({
     *     // The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous search request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. `Required`. Query string for performing search on groups. Users can search on parent and label attributes of groups. EXACT match ('==') is supported on parent, and CONTAINS match ('in') is supported on labels.
     *     query: 'placeholder-value',
     *     // Group resource view to be returned. Defaults to [View.BASIC]().
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous search request, if any.
     * @param {string=} params.query Required. `Required`. Query string for performing search on groups. Users can search on parent and label attributes of groups. EXACT match ('==') is supported on parent, and CONTAINS match ('in') is supported on labels.
     * @param {string=} params.view Group resource view to be returned. Defaults to [View.BASIC]().
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params: Params$Resource$Groups$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Groups$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchGroupsResponse>;
    search(
      params: Params$Resource$Groups$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Groups$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(
      params: Params$Resource$Groups$Search,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchGroupsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Groups$Search
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchGroupsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Groups$Create extends StandardParameters {
    /**
     * Optional. The initial configuration option for the `Group`.
     */
    initialGroupConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Delete extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$List extends StandardParameters {
    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. Customer ID to list all groups from.
     */
    parent?: string;
    /**
     * Group resource view to be returned. Defaults to [View.BASIC]().
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Lookup extends StandardParameters {
    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    'groupKey.id'?: string;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     */
    'groupKey.namespace'?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group. Must be left blank while creating a Group.
     */
    name?: string;
    /**
     * Required. Editable fields: `display_name`, `description`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Search extends StandardParameters {
    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * Required. `Required`. Query string for performing search on groups. Users can search on parent and label attributes of groups. EXACT match ('==') is supported on parent, and CONTAINS match ('in') is supported on labels.
     */
    query?: string;
    /**
     * Group resource view to be returned. Defaults to [View.BASIC]().
     */
    view?: string;
  }

  export class Resource$Groups$Memberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudidentity.groups.memberships.create
     * @desc Creates a Membership.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.create({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to create Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     *     parent: 'groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "preferredMemberKey": {},
     *       //   "roles": [],
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to create Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {().Membership} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Groups$Memberships$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.delete
     * @desc Deletes a Membership.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.delete({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be deleted. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member.
     *     name: 'groups/my-group/memberships/my-membership',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be deleted. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Groups$Memberships$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.get
     * @desc Retrieves a Membership.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.get({
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be retrieved. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique id assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     *     name: 'groups/my-group/memberships/my-membership',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "preferredMemberKey": {},
     *   //   "roles": [],
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be retrieved. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique id assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Groups$Memberships$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(callback: BodyResponseCallback<Schema$Membership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Get
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Membership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Membership>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Membership>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.list
     * @desc Lists Memberships within a Group.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.list({
     *     // The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous list request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to list Memberships within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     *     parent: 'groups/my-group',
     *     // Membership resource view to be returned. Defaults to View.BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberships": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to list Memberships within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {string=} params.view Membership resource view to be returned. Defaults to View.BASIC.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Groups$Memberships$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Groups$Memberships$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipsResponse>;
    list(
      params: Params$Resource$Groups$Memberships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Groups$Memberships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$Memberships$List,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMembershipsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$List
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListMembershipsResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.lookup
     * @desc Looks up [resource name](https://cloud.google.com/apis/design/resource_names) of a Membership within a Group by member's EntityKey.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.lookup({
     *     // The ID of the entity within the given namespace. The ID must be unique within its namespace.
     *     'memberKey.id': 'placeholder-value',
     *     // Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     *     'memberKey.namespace': 'placeholder-value',
     *     // Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to lookup Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     *     parent: 'groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.memberKey.id The ID of the entity within the given namespace. The ID must be unique within its namespace.
     * @param {string=} params.memberKey.namespace Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     * @param {string} params.parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to lookup Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Groups$Memberships$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupMembershipNameResponse>;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Lookup
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LookupMembershipNameResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships:lookup').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters
        );
      }
    }

    /**
     * cloudidentity.groups.memberships.modifyMembershipRoles
     * @desc Modifies the `MembershipRole`s of a `Membership`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudidentity.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudidentity = google.cloudidentity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-identity.groups',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudidentity.groups.memberships.modifyMembershipRoles({
     *     // Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     *     name: 'groups/my-group/memberships/my-membership',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addRoles": [],
     *       //   "removeRoles": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "membership": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudidentity.groups.memberships.modifyMembershipRoles
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     * @param {().ModifyMembershipRolesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifyMembershipRoles(
      params?: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ModifyMembershipRolesResponse>;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Modifymembershiproles
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ModifyMembershipRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Modifymembershiproles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Modifymembershiproles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:modifyMembershipRoles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ModifyMembershipRolesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ModifyMembershipRolesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Groups$Memberships$Create
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to create Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Membership;
  }
  export interface Params$Resource$Groups$Memberships$Delete
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be deleted. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$Get
    extends StandardParameters {
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be retrieved. Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique id assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$List
    extends StandardParameters {
    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to list Memberships within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;
    /**
     * Membership resource view to be returned. Defaults to View.BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Memberships$Lookup
    extends StandardParameters {
    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    'memberKey.id'?: string;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace. Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     */
    'memberKey.namespace'?: string;
    /**
     * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to lookup Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;
  }
  export interface Params$Resource$Groups$Memberships$Modifymembershiproles
    extends StandardParameters {
    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyMembershipRolesRequest;
  }
}

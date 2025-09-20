# better_auth.OrganizationApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organization_accept_invitation_post**](OrganizationApi.md#organization_accept_invitation_post) | **POST** /organization/accept-invitation | 
[**organization_cancel_invitation_post**](OrganizationApi.md#organization_cancel_invitation_post) | **POST** /organization/cancel-invitation | 
[**organization_check_slug_post**](OrganizationApi.md#organization_check_slug_post) | **POST** /organization/check-slug | 
[**organization_create_post**](OrganizationApi.md#organization_create_post) | **POST** /organization/create | 
[**organization_delete_post**](OrganizationApi.md#organization_delete_post) | **POST** /organization/delete | 
[**organization_get_active_member_get**](OrganizationApi.md#organization_get_active_member_get) | **GET** /organization/get-active-member | 
[**organization_get_full_organization_get**](OrganizationApi.md#organization_get_full_organization_get) | **GET** /organization/get-full-organization | 
[**organization_get_invitation_get**](OrganizationApi.md#organization_get_invitation_get) | **GET** /organization/get-invitation | 
[**organization_has_permission_post**](OrganizationApi.md#organization_has_permission_post) | **POST** /organization/has-permission | 
[**organization_invite_member_post**](OrganizationApi.md#organization_invite_member_post) | **POST** /organization/invite-member | 
[**organization_leave_post**](OrganizationApi.md#organization_leave_post) | **POST** /organization/leave | 
[**organization_list_get**](OrganizationApi.md#organization_list_get) | **GET** /organization/list | 
[**organization_list_invitations_get**](OrganizationApi.md#organization_list_invitations_get) | **GET** /organization/list-invitations | 
[**organization_list_members_get**](OrganizationApi.md#organization_list_members_get) | **GET** /organization/list-members | 
[**organization_list_user_invitations_get**](OrganizationApi.md#organization_list_user_invitations_get) | **GET** /organization/list-user-invitations | 
[**organization_reject_invitation_post**](OrganizationApi.md#organization_reject_invitation_post) | **POST** /organization/reject-invitation | 
[**organization_remove_member_post**](OrganizationApi.md#organization_remove_member_post) | **POST** /organization/remove-member | 
[**organization_set_active_post**](OrganizationApi.md#organization_set_active_post) | **POST** /organization/set-active | 
[**organization_update_member_role_post**](OrganizationApi.md#organization_update_member_role_post) | **POST** /organization/update-member-role | 
[**organization_update_post**](OrganizationApi.md#organization_update_post) | **POST** /organization/update | 


# **organization_accept_invitation_post**
> OrganizationAcceptInvitationPost200Response organization_accept_invitation_post(organization_accept_invitation_post_request)

Accept an invitation to an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_accept_invitation_post200_response import OrganizationAcceptInvitationPost200Response
from better_auth.models.organization_accept_invitation_post_request import OrganizationAcceptInvitationPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_accept_invitation_post_request = better_auth.OrganizationAcceptInvitationPostRequest() # OrganizationAcceptInvitationPostRequest | 

    try:
        api_response = await api_instance.organization_accept_invitation_post(organization_accept_invitation_post_request)
        print("The response of OrganizationApi->organization_accept_invitation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_accept_invitation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_accept_invitation_post_request** | [**OrganizationAcceptInvitationPostRequest**](OrganizationAcceptInvitationPostRequest.md)|  | 

### Return type

[**OrganizationAcceptInvitationPost200Response**](OrganizationAcceptInvitationPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_cancel_invitation_post**
> organization_cancel_invitation_post(organization_cancel_invitation_post_request)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_cancel_invitation_post_request import OrganizationCancelInvitationPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_cancel_invitation_post_request = better_auth.OrganizationCancelInvitationPostRequest() # OrganizationCancelInvitationPostRequest | 

    try:
        await api_instance.organization_cancel_invitation_post(organization_cancel_invitation_post_request)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_cancel_invitation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_cancel_invitation_post_request** | [**OrganizationCancelInvitationPostRequest**](OrganizationCancelInvitationPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_check_slug_post**
> organization_check_slug_post(organization_check_slug_post_request)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_check_slug_post_request import OrganizationCheckSlugPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_check_slug_post_request = better_auth.OrganizationCheckSlugPostRequest() # OrganizationCheckSlugPostRequest | 

    try:
        await api_instance.organization_check_slug_post(organization_check_slug_post_request)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_check_slug_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_check_slug_post_request** | [**OrganizationCheckSlugPostRequest**](OrganizationCheckSlugPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_create_post**
> Organization organization_create_post(organization_create_post_request)

Create an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_create_post_request import OrganizationCreatePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_create_post_request = better_auth.OrganizationCreatePostRequest() # OrganizationCreatePostRequest | 

    try:
        api_response = await api_instance.organization_create_post(organization_create_post_request)
        print("The response of OrganizationApi->organization_create_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_create_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_create_post_request** | [**OrganizationCreatePostRequest**](OrganizationCreatePostRequest.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_delete_post**
> str organization_delete_post(organization_delete_post_request)

Delete an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_delete_post_request import OrganizationDeletePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_delete_post_request = better_auth.OrganizationDeletePostRequest() # OrganizationDeletePostRequest | 

    try:
        api_response = await api_instance.organization_delete_post(organization_delete_post_request)
        print("The response of OrganizationApi->organization_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_delete_post_request** | [**OrganizationDeletePostRequest**](OrganizationDeletePostRequest.md)|  | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_get_active_member_get**
> OrganizationGetActiveMemberGet200Response organization_get_active_member_get()

Get the member details of the active organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_get_active_member_get200_response import OrganizationGetActiveMemberGet200Response
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        api_response = await api_instance.organization_get_active_member_get()
        print("The response of OrganizationApi->organization_get_active_member_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_get_active_member_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrganizationGetActiveMemberGet200Response**](OrganizationGetActiveMemberGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_get_full_organization_get**
> Organization organization_get_full_organization_get()

Get the full organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        api_response = await api_instance.organization_get_full_organization_get()
        print("The response of OrganizationApi->organization_get_full_organization_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_get_full_organization_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_get_invitation_get**
> OrganizationGetInvitationGet200Response organization_get_invitation_get(id=id)

Get an invitation by ID

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_get_invitation_get200_response import OrganizationGetInvitationGet200Response
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    id = 'id_example' # str |  (optional)

    try:
        api_response = await api_instance.organization_get_invitation_get(id=id)
        print("The response of OrganizationApi->organization_get_invitation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_get_invitation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 

### Return type

[**OrganizationGetInvitationGet200Response**](OrganizationGetInvitationGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_has_permission_post**
> AdminHasPermissionPost200Response organization_has_permission_post(admin_has_permission_post_request=admin_has_permission_post_request)

Check if the user has permission

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.admin_has_permission_post200_response import AdminHasPermissionPost200Response
from better_auth.models.admin_has_permission_post_request import AdminHasPermissionPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    admin_has_permission_post_request = better_auth.AdminHasPermissionPostRequest() # AdminHasPermissionPostRequest |  (optional)

    try:
        api_response = await api_instance.organization_has_permission_post(admin_has_permission_post_request=admin_has_permission_post_request)
        print("The response of OrganizationApi->organization_has_permission_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_has_permission_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_has_permission_post_request** | [**AdminHasPermissionPostRequest**](AdminHasPermissionPostRequest.md)|  | [optional] 

### Return type

[**AdminHasPermissionPost200Response**](AdminHasPermissionPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_invite_member_post**
> OrganizationInviteMemberPost200Response organization_invite_member_post(organization_invite_member_post_request)

Invite a user to an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_invite_member_post200_response import OrganizationInviteMemberPost200Response
from better_auth.models.organization_invite_member_post_request import OrganizationInviteMemberPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_invite_member_post_request = better_auth.OrganizationInviteMemberPostRequest() # OrganizationInviteMemberPostRequest | 

    try:
        api_response = await api_instance.organization_invite_member_post(organization_invite_member_post_request)
        print("The response of OrganizationApi->organization_invite_member_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_invite_member_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_invite_member_post_request** | [**OrganizationInviteMemberPostRequest**](OrganizationInviteMemberPostRequest.md)|  | 

### Return type

[**OrganizationInviteMemberPost200Response**](OrganizationInviteMemberPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_leave_post**
> organization_leave_post(organization_leave_post_request)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_leave_post_request import OrganizationLeavePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_leave_post_request = better_auth.OrganizationLeavePostRequest() # OrganizationLeavePostRequest | 

    try:
        await api_instance.organization_leave_post(organization_leave_post_request)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_leave_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_leave_post_request** | [**OrganizationLeavePostRequest**](OrganizationLeavePostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_list_get**
> List[Organization] organization_list_get()

List all organizations

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization import Organization
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        api_response = await api_instance.organization_list_get()
        print("The response of OrganizationApi->organization_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_list_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Organization]**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_list_invitations_get**
> organization_list_invitations_get()

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        await api_instance.organization_list_invitations_get()
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_list_invitations_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_list_members_get**
> organization_list_members_get()

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        await api_instance.organization_list_members_get()
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_list_members_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_list_user_invitations_get**
> organization_list_user_invitations_get()

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)

    try:
        await api_instance.organization_list_user_invitations_get()
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_list_user_invitations_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_reject_invitation_post**
> OrganizationRejectInvitationPost200Response organization_reject_invitation_post(organization_reject_invitation_post_request)

Reject an invitation to an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_reject_invitation_post200_response import OrganizationRejectInvitationPost200Response
from better_auth.models.organization_reject_invitation_post_request import OrganizationRejectInvitationPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_reject_invitation_post_request = better_auth.OrganizationRejectInvitationPostRequest() # OrganizationRejectInvitationPostRequest | 

    try:
        api_response = await api_instance.organization_reject_invitation_post(organization_reject_invitation_post_request)
        print("The response of OrganizationApi->organization_reject_invitation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_reject_invitation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_reject_invitation_post_request** | [**OrganizationRejectInvitationPostRequest**](OrganizationRejectInvitationPostRequest.md)|  | 

### Return type

[**OrganizationRejectInvitationPost200Response**](OrganizationRejectInvitationPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_remove_member_post**
> OrganizationRemoveMemberPost200Response organization_remove_member_post(organization_remove_member_post_request)

Remove a member from an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_remove_member_post200_response import OrganizationRemoveMemberPost200Response
from better_auth.models.organization_remove_member_post_request import OrganizationRemoveMemberPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_remove_member_post_request = better_auth.OrganizationRemoveMemberPostRequest() # OrganizationRemoveMemberPostRequest | 

    try:
        api_response = await api_instance.organization_remove_member_post(organization_remove_member_post_request)
        print("The response of OrganizationApi->organization_remove_member_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_remove_member_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_remove_member_post_request** | [**OrganizationRemoveMemberPostRequest**](OrganizationRemoveMemberPostRequest.md)|  | 

### Return type

[**OrganizationRemoveMemberPost200Response**](OrganizationRemoveMemberPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_set_active_post**
> Organization organization_set_active_post(organization_set_active_post_request)

Set the active organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_set_active_post_request import OrganizationSetActivePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_set_active_post_request = better_auth.OrganizationSetActivePostRequest() # OrganizationSetActivePostRequest | 

    try:
        api_response = await api_instance.organization_set_active_post(organization_set_active_post_request)
        print("The response of OrganizationApi->organization_set_active_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_set_active_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_set_active_post_request** | [**OrganizationSetActivePostRequest**](OrganizationSetActivePostRequest.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_update_member_role_post**
> OrganizationRemoveMemberPost200Response organization_update_member_role_post(organization_update_member_role_post_request)

Update the role of a member in an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_remove_member_post200_response import OrganizationRemoveMemberPost200Response
from better_auth.models.organization_update_member_role_post_request import OrganizationUpdateMemberRolePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_update_member_role_post_request = better_auth.OrganizationUpdateMemberRolePostRequest() # OrganizationUpdateMemberRolePostRequest | 

    try:
        api_response = await api_instance.organization_update_member_role_post(organization_update_member_role_post_request)
        print("The response of OrganizationApi->organization_update_member_role_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_update_member_role_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_update_member_role_post_request** | [**OrganizationUpdateMemberRolePostRequest**](OrganizationUpdateMemberRolePostRequest.md)|  | 

### Return type

[**OrganizationRemoveMemberPost200Response**](OrganizationRemoveMemberPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_update_post**
> Organization organization_update_post(organization_update_post_request)

Update an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.organization_update_post_request import OrganizationUpdatePostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.OrganizationApi(api_client)
    organization_update_post_request = better_auth.OrganizationUpdatePostRequest() # OrganizationUpdatePostRequest | 

    try:
        api_response = await api_instance.organization_update_post(organization_update_post_request)
        print("The response of OrganizationApi->organization_update_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->organization_update_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_update_post_request** | [**OrganizationUpdatePostRequest**](OrganizationUpdatePostRequest.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


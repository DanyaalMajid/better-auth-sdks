# better_auth.AdminApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_has_permission_post**](AdminApi.md#admin_has_permission_post) | **POST** /admin/has-permission | 
[**admin_stop_impersonating_post**](AdminApi.md#admin_stop_impersonating_post) | **POST** /admin/stop-impersonating | 
[**ban_user**](AdminApi.md#ban_user) | **POST** /admin/ban-user | 
[**create_user**](AdminApi.md#create_user) | **POST** /admin/create-user | 
[**get_user**](AdminApi.md#get_user) | **GET** /admin/get-user | 
[**impersonate_user**](AdminApi.md#impersonate_user) | **POST** /admin/impersonate-user | 
[**list_user_sessions**](AdminApi.md#list_user_sessions) | **POST** /admin/list-user-sessions | 
[**list_users**](AdminApi.md#list_users) | **GET** /admin/list-users | 
[**remove_user**](AdminApi.md#remove_user) | **POST** /admin/remove-user | 
[**revoke_user_session**](AdminApi.md#revoke_user_session) | **POST** /admin/revoke-user-session | 
[**revoke_user_sessions**](AdminApi.md#revoke_user_sessions) | **POST** /admin/revoke-user-sessions | 
[**set_role**](AdminApi.md#set_role) | **POST** /admin/set-role | 
[**set_user_password**](AdminApi.md#set_user_password) | **POST** /admin/set-user-password | 
[**unban_user**](AdminApi.md#unban_user) | **POST** /admin/unban-user | 
[**update_user**](AdminApi.md#update_user) | **POST** /admin/update-user | 


# **admin_has_permission_post**
> AdminHasPermissionPost200Response admin_has_permission_post(admin_has_permission_post_request=admin_has_permission_post_request)

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
    api_instance = better_auth.AdminApi(api_client)
    admin_has_permission_post_request = better_auth.AdminHasPermissionPostRequest() # AdminHasPermissionPostRequest |  (optional)

    try:
        api_response = await api_instance.admin_has_permission_post(admin_has_permission_post_request=admin_has_permission_post_request)
        print("The response of AdminApi->admin_has_permission_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->admin_has_permission_post: %s\n" % e)
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

# **admin_stop_impersonating_post**
> admin_stop_impersonating_post()

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
    api_instance = better_auth.AdminApi(api_client)

    try:
        await api_instance.admin_stop_impersonating_post()
    except Exception as e:
        print("Exception when calling AdminApi->admin_stop_impersonating_post: %s\n" % e)
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

# **ban_user**
> SetRole200Response ban_user(ban_user_request)

Ban a user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.ban_user_request import BanUserRequest
from better_auth.models.set_role200_response import SetRole200Response
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
    api_instance = better_auth.AdminApi(api_client)
    ban_user_request = better_auth.BanUserRequest() # BanUserRequest | 

    try:
        api_response = await api_instance.ban_user(ban_user_request)
        print("The response of AdminApi->ban_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->ban_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ban_user_request** | [**BanUserRequest**](BanUserRequest.md)|  | 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User banned |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_user**
> SetRole200Response create_user(create_user_request)

Create a new user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.create_user_request import CreateUserRequest
from better_auth.models.set_role200_response import SetRole200Response
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
    api_instance = better_auth.AdminApi(api_client)
    create_user_request = better_auth.CreateUserRequest() # CreateUserRequest | 

    try:
        api_response = await api_instance.create_user(create_user_request)
        print("The response of AdminApi->create_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_user_request** | [**CreateUserRequest**](CreateUserRequest.md)|  | 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User created |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user**
> SetRole200Response get_user(id=id)

Get an existing user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.set_role200_response import SetRole200Response
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
    api_instance = better_auth.AdminApi(api_client)
    id = 'id_example' # str |  (optional)

    try:
        api_response = await api_instance.get_user(id=id)
        print("The response of AdminApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **impersonate_user**
> SignInAnonymousPost200Response impersonate_user(list_user_sessions_request)

Impersonate a user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest
from better_auth.models.sign_in_anonymous_post200_response import SignInAnonymousPost200Response
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
    api_instance = better_auth.AdminApi(api_client)
    list_user_sessions_request = better_auth.ListUserSessionsRequest() # ListUserSessionsRequest | 

    try:
        api_response = await api_instance.impersonate_user(list_user_sessions_request)
        print("The response of AdminApi->impersonate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->impersonate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_user_sessions_request** | [**ListUserSessionsRequest**](ListUserSessionsRequest.md)|  | 

### Return type

[**SignInAnonymousPost200Response**](SignInAnonymousPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Impersonation session created |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_sessions**
> ListUserSessions200Response list_user_sessions(list_user_sessions_request)

List user sessions

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_user_sessions200_response import ListUserSessions200Response
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest
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
    api_instance = better_auth.AdminApi(api_client)
    list_user_sessions_request = better_auth.ListUserSessionsRequest() # ListUserSessionsRequest | 

    try:
        api_response = await api_instance.list_user_sessions(list_user_sessions_request)
        print("The response of AdminApi->list_user_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_user_sessions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_user_sessions_request** | [**ListUserSessionsRequest**](ListUserSessionsRequest.md)|  | 

### Return type

[**ListUserSessions200Response**](ListUserSessions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of user sessions |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_users**
> ListUsers200Response list_users(search_value=search_value, search_field=search_field, search_operator=search_operator, limit=limit, offset=offset, sort_by=sort_by, sort_direction=sort_direction, filter_field=filter_field, filter_value=filter_value, filter_operator=filter_operator)

List users

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_users200_response import ListUsers200Response
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
    api_instance = better_auth.AdminApi(api_client)
    search_value = 'search_value_example' # str |  (optional)
    search_field = 'search_field_example' # str |  (optional)
    search_operator = 'search_operator_example' # str |  (optional)
    limit = 'limit_example' # str |  (optional)
    offset = 'offset_example' # str |  (optional)
    sort_by = 'sort_by_example' # str |  (optional)
    sort_direction = 'sort_direction_example' # str |  (optional)
    filter_field = 'filter_field_example' # str |  (optional)
    filter_value = 'filter_value_example' # str |  (optional)
    filter_operator = 'filter_operator_example' # str |  (optional)

    try:
        api_response = await api_instance.list_users(search_value=search_value, search_field=search_field, search_operator=search_operator, limit=limit, offset=offset, sort_by=sort_by, sort_direction=sort_direction, filter_field=filter_field, filter_value=filter_value, filter_operator=filter_operator)
        print("The response of AdminApi->list_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_value** | **str**|  | [optional] 
 **search_field** | **str**|  | [optional] 
 **search_operator** | **str**|  | [optional] 
 **limit** | **str**|  | [optional] 
 **offset** | **str**|  | [optional] 
 **sort_by** | **str**|  | [optional] 
 **sort_direction** | **str**|  | [optional] 
 **filter_field** | **str**|  | [optional] 
 **filter_value** | **str**|  | [optional] 
 **filter_operator** | **str**|  | [optional] 

### Return type

[**ListUsers200Response**](ListUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of users |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_user**
> SignOutPost200Response remove_user(list_user_sessions_request)

Delete a user and all their sessions and accounts. Cannot be undone.

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest
from better_auth.models.sign_out_post200_response import SignOutPost200Response
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
    api_instance = better_auth.AdminApi(api_client)
    list_user_sessions_request = better_auth.ListUserSessionsRequest() # ListUserSessionsRequest | 

    try:
        api_response = await api_instance.remove_user(list_user_sessions_request)
        print("The response of AdminApi->remove_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->remove_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_user_sessions_request** | [**ListUserSessionsRequest**](ListUserSessionsRequest.md)|  | 

### Return type

[**SignOutPost200Response**](SignOutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User removed |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_user_session**
> SignOutPost200Response revoke_user_session(revoke_user_session_request)

Revoke a user session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.revoke_user_session_request import RevokeUserSessionRequest
from better_auth.models.sign_out_post200_response import SignOutPost200Response
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
    api_instance = better_auth.AdminApi(api_client)
    revoke_user_session_request = better_auth.RevokeUserSessionRequest() # RevokeUserSessionRequest | 

    try:
        api_response = await api_instance.revoke_user_session(revoke_user_session_request)
        print("The response of AdminApi->revoke_user_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->revoke_user_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revoke_user_session_request** | [**RevokeUserSessionRequest**](RevokeUserSessionRequest.md)|  | 

### Return type

[**SignOutPost200Response**](SignOutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session revoked |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_user_sessions**
> SignOutPost200Response revoke_user_sessions(list_user_sessions_request)

Revoke all user sessions

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest
from better_auth.models.sign_out_post200_response import SignOutPost200Response
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
    api_instance = better_auth.AdminApi(api_client)
    list_user_sessions_request = better_auth.ListUserSessionsRequest() # ListUserSessionsRequest | 

    try:
        api_response = await api_instance.revoke_user_sessions(list_user_sessions_request)
        print("The response of AdminApi->revoke_user_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->revoke_user_sessions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_user_sessions_request** | [**ListUserSessionsRequest**](ListUserSessionsRequest.md)|  | 

### Return type

[**SignOutPost200Response**](SignOutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sessions revoked |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_role**
> SetRole200Response set_role(set_role_request)

Set the role of a user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.set_role200_response import SetRole200Response
from better_auth.models.set_role_request import SetRoleRequest
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
    api_instance = better_auth.AdminApi(api_client)
    set_role_request = better_auth.SetRoleRequest() # SetRoleRequest | 

    try:
        api_response = await api_instance.set_role(set_role_request)
        print("The response of AdminApi->set_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->set_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_role_request** | [**SetRoleRequest**](SetRoleRequest.md)|  | 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User role updated |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_user_password**
> ResetPasswordPost200Response set_user_password(set_user_password_request)

Set a user's password

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.reset_password_post200_response import ResetPasswordPost200Response
from better_auth.models.set_user_password_request import SetUserPasswordRequest
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
    api_instance = better_auth.AdminApi(api_client)
    set_user_password_request = better_auth.SetUserPasswordRequest() # SetUserPasswordRequest | 

    try:
        api_response = await api_instance.set_user_password(set_user_password_request)
        print("The response of AdminApi->set_user_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->set_user_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_user_password_request** | [**SetUserPasswordRequest**](SetUserPasswordRequest.md)|  | 

### Return type

[**ResetPasswordPost200Response**](ResetPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password set |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unban_user**
> SetRole200Response unban_user(list_user_sessions_request)

Unban a user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest
from better_auth.models.set_role200_response import SetRole200Response
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
    api_instance = better_auth.AdminApi(api_client)
    list_user_sessions_request = better_auth.ListUserSessionsRequest() # ListUserSessionsRequest | 

    try:
        api_response = await api_instance.unban_user(list_user_sessions_request)
        print("The response of AdminApi->unban_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->unban_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_user_sessions_request** | [**ListUserSessionsRequest**](ListUserSessionsRequest.md)|  | 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User unbanned |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user**
> SetRole200Response update_user(update_user_request)

Update a user's details

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.set_role200_response import SetRole200Response
from better_auth.models.update_user_request import UpdateUserRequest
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
    api_instance = better_auth.AdminApi(api_client)
    update_user_request = better_auth.UpdateUserRequest() # UpdateUserRequest | 

    try:
        api_response = await api_instance.update_user(update_user_request)
        print("The response of AdminApi->update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_user_request** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 

### Return type

[**SetRole200Response**](SetRole200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


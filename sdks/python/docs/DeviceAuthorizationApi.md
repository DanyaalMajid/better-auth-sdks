# better_auth.DeviceAuthorizationApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_approve_post**](DeviceAuthorizationApi.md#device_approve_post) | **POST** /device/approve | 
[**device_code_post**](DeviceAuthorizationApi.md#device_code_post) | **POST** /device/code | 
[**device_deny_post**](DeviceAuthorizationApi.md#device_deny_post) | **POST** /device/deny | 
[**device_get**](DeviceAuthorizationApi.md#device_get) | **GET** /device | 
[**device_token_post**](DeviceAuthorizationApi.md#device_token_post) | **POST** /device/token | 


# **device_approve_post**
> SignOutPost200Response device_approve_post(device_approve_post_request)

Approve device authorization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.device_approve_post_request import DeviceApprovePostRequest
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
    api_instance = better_auth.DeviceAuthorizationApi(api_client)
    device_approve_post_request = better_auth.DeviceApprovePostRequest() # DeviceApprovePostRequest | 

    try:
        api_response = await api_instance.device_approve_post(device_approve_post_request)
        print("The response of DeviceAuthorizationApi->device_approve_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceAuthorizationApi->device_approve_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_approve_post_request** | [**DeviceApprovePostRequest**](DeviceApprovePostRequest.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_code_post**
> DeviceCodePost200Response device_code_post(device_code_post_request)

Request a device and user code

Follow [rfc8628#section-3.2](https://datatracker.ietf.org/doc/html/rfc8628#section-3.2)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.device_code_post200_response import DeviceCodePost200Response
from better_auth.models.device_code_post_request import DeviceCodePostRequest
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
    api_instance = better_auth.DeviceAuthorizationApi(api_client)
    device_code_post_request = better_auth.DeviceCodePostRequest() # DeviceCodePostRequest | 

    try:
        api_response = await api_instance.device_code_post(device_code_post_request)
        print("The response of DeviceAuthorizationApi->device_code_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceAuthorizationApi->device_code_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_code_post_request** | [**DeviceCodePostRequest**](DeviceCodePostRequest.md)|  | 

### Return type

[**DeviceCodePost200Response**](DeviceCodePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error response |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_deny_post**
> SignOutPost200Response device_deny_post(device_deny_post_request)

Deny device authorization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.device_deny_post_request import DeviceDenyPostRequest
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
    api_instance = better_auth.DeviceAuthorizationApi(api_client)
    device_deny_post_request = better_auth.DeviceDenyPostRequest() # DeviceDenyPostRequest | 

    try:
        api_response = await api_instance.device_deny_post(device_deny_post_request)
        print("The response of DeviceAuthorizationApi->device_deny_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceAuthorizationApi->device_deny_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_deny_post_request** | [**DeviceDenyPostRequest**](DeviceDenyPostRequest.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_get**
> DeviceGet200Response device_get(user_code=user_code)

Display device verification page

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.device_get200_response import DeviceGet200Response
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
    api_instance = better_auth.DeviceAuthorizationApi(api_client)
    user_code = 'user_code_example' # str |  (optional)

    try:
        api_response = await api_instance.device_get(user_code=user_code)
        print("The response of DeviceAuthorizationApi->device_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceAuthorizationApi->device_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_code** | **str**|  | [optional] 

### Return type

[**DeviceGet200Response**](DeviceGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification page HTML |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_token_post**
> SignInAnonymousPost200Response device_token_post(device_token_post_request)

Exchange device code for access token

Follow [rfc8628#section-3.4](https://datatracker.ietf.org/doc/html/rfc8628#section-3.4)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.device_token_post_request import DeviceTokenPostRequest
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
    api_instance = better_auth.DeviceAuthorizationApi(api_client)
    device_token_post_request = better_auth.DeviceTokenPostRequest() # DeviceTokenPostRequest | 

    try:
        api_response = await api_instance.device_token_post(device_token_post_request)
        print("The response of DeviceAuthorizationApi->device_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceAuthorizationApi->device_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_token_post_request** | [**DeviceTokenPostRequest**](DeviceTokenPostRequest.md)|  | 

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
**200** | Success |  -  |
**400** | Error response |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


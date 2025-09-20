# better_auth.OidcApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2_authorize_get**](OidcApi.md#oauth2_authorize_get) | **GET** /oauth2/authorize | 
[**oauth2_client_id_get**](OidcApi.md#oauth2_client_id_get) | **GET** /oauth2/client/{id} | 
[**oauth2_consent_post**](OidcApi.md#oauth2_consent_post) | **POST** /oauth2/consent | 
[**oauth2_register_post**](OidcApi.md#oauth2_register_post) | **POST** /oauth2/register | 
[**oauth2_token_post**](OidcApi.md#oauth2_token_post) | **POST** /oauth2/token | 
[**oauth2_userinfo_get**](OidcApi.md#oauth2_userinfo_get) | **GET** /oauth2/userinfo | 
[**well_known_openid_configuration_get**](OidcApi.md#well_known_openid_configuration_get) | **GET** /.well-known/openid-configuration | 


# **oauth2_authorize_get**
> Dict[str, object] oauth2_authorize_get()

Authorize an OAuth2 request

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
    api_instance = better_auth.OidcApi(api_client)

    try:
        api_response = await api_instance.oauth2_authorize_get()
        print("The response of OidcApi->oauth2_authorize_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_authorize_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**Dict[str, object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization response generated successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2_client_id_get**
> Oauth2ClientIdGet200Response oauth2_client_id_get()

Get OAuth2 client details

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_client_id_get200_response import Oauth2ClientIdGet200Response
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
    api_instance = better_auth.OidcApi(api_client)

    try:
        api_response = await api_instance.oauth2_client_id_get()
        print("The response of OidcApi->oauth2_client_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_client_id_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Oauth2ClientIdGet200Response**](Oauth2ClientIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 client retrieved successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2_consent_post**
> Oauth2ConsentPost200Response oauth2_consent_post(oauth2_consent_post_request)

Handle OAuth2 consent. Supports both URL parameter-based flows (consent_code in body) and cookie-based flows (signed cookie).

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_consent_post200_response import Oauth2ConsentPost200Response
from better_auth.models.oauth2_consent_post_request import Oauth2ConsentPostRequest
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
    api_instance = better_auth.OidcApi(api_client)
    oauth2_consent_post_request = better_auth.Oauth2ConsentPostRequest() # Oauth2ConsentPostRequest | 

    try:
        api_response = await api_instance.oauth2_consent_post(oauth2_consent_post_request)
        print("The response of OidcApi->oauth2_consent_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_consent_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth2_consent_post_request** | [**Oauth2ConsentPostRequest**](Oauth2ConsentPostRequest.md)|  | 

### Return type

[**Oauth2ConsentPost200Response**](Oauth2ConsentPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consent processed successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2_register_post**
> Oauth2RegisterPost200Response oauth2_register_post(oauth2_register_post_request)

Register an OAuth2 application

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_register_post200_response import Oauth2RegisterPost200Response
from better_auth.models.oauth2_register_post_request import Oauth2RegisterPostRequest
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
    api_instance = better_auth.OidcApi(api_client)
    oauth2_register_post_request = better_auth.Oauth2RegisterPostRequest() # Oauth2RegisterPostRequest | 

    try:
        api_response = await api_instance.oauth2_register_post(oauth2_register_post_request)
        print("The response of OidcApi->oauth2_register_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_register_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth2_register_post_request** | [**Oauth2RegisterPostRequest**](Oauth2RegisterPostRequest.md)|  | 

### Return type

[**Oauth2RegisterPost200Response**](Oauth2RegisterPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 application registered successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2_token_post**
> oauth2_token_post()

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
    api_instance = better_auth.OidcApi(api_client)

    try:
        await api_instance.oauth2_token_post()
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_token_post: %s\n" % e)
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

# **oauth2_userinfo_get**
> Oauth2UserinfoGet200Response oauth2_userinfo_get()

Get OAuth2 user information

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_userinfo_get200_response import Oauth2UserinfoGet200Response
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
    api_instance = better_auth.OidcApi(api_client)

    try:
        api_response = await api_instance.oauth2_userinfo_get()
        print("The response of OidcApi->oauth2_userinfo_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OidcApi->oauth2_userinfo_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Oauth2UserinfoGet200Response**](Oauth2UserinfoGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User information retrieved successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **well_known_openid_configuration_get**
> well_known_openid_configuration_get()

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
    api_instance = better_auth.OidcApi(api_client)

    try:
        await api_instance.well_known_openid_configuration_get()
    except Exception as e:
        print("Exception when calling OidcApi->well_known_openid_configuration_get: %s\n" % e)
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


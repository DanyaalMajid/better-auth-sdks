# better_auth.AnonymousApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sign_in_anonymous_post**](AnonymousApi.md#sign_in_anonymous_post) | **POST** /sign-in/anonymous | 


# **sign_in_anonymous_post**
> SignInAnonymousPost200Response sign_in_anonymous_post()

Sign in anonymously

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
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
    api_instance = better_auth.AnonymousApi(api_client)

    try:
        api_response = await api_instance.sign_in_anonymous_post()
        print("The response of AnonymousApi->sign_in_anonymous_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnonymousApi->sign_in_anonymous_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SignInAnonymousPost200Response**](SignInAnonymousPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sign in anonymously |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


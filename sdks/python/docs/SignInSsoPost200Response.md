# SignInSsoPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The authorization URL to redirect the user to for SSO sign-in | 
**redirect** | **bool** | Indicates that the client should redirect to the provided URL | 

## Example

```python
from better_auth.models.sign_in_sso_post200_response import SignInSsoPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignInSsoPost200Response from a JSON string
sign_in_sso_post200_response_instance = SignInSsoPost200Response.from_json(json)
# print the JSON string representation of the object
print(SignInSsoPost200Response.to_json())

# convert the object into a dict
sign_in_sso_post200_response_dict = sign_in_sso_post200_response_instance.to_dict()
# create an instance of SignInSsoPost200Response from a dict
sign_in_sso_post200_response_from_dict = SignInSsoPost200Response.from_dict(sign_in_sso_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



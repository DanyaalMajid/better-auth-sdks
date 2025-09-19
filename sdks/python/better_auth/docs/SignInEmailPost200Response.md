# SignInEmailPost200Response

Session response when idToken is provided

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect** | **bool** |  | 
**token** | **str** | Session token | 
**url** | **object** |  | [optional] 
**user** | [**SignInEmailPost200ResponseUser**](SignInEmailPost200ResponseUser.md) |  | 

## Example

```python
from better_auth.models.sign_in_email_post200_response import SignInEmailPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignInEmailPost200Response from a JSON string
sign_in_email_post200_response_instance = SignInEmailPost200Response.from_json(json)
# print the JSON string representation of the object
print(SignInEmailPost200Response.to_json())

# convert the object into a dict
sign_in_email_post200_response_dict = sign_in_email_post200_response_instance.to_dict()
# create an instance of SignInEmailPost200Response from a dict
sign_in_email_post200_response_from_dict = SignInEmailPost200Response.from_dict(sign_in_email_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



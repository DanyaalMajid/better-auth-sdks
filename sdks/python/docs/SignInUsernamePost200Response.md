# SignInUsernamePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Session token for the authenticated session | 
**user** | [**User**](User.md) |  | 

## Example

```python
from better_auth.models.sign_in_username_post200_response import SignInUsernamePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignInUsernamePost200Response from a JSON string
sign_in_username_post200_response_instance = SignInUsernamePost200Response.from_json(json)
# print the JSON string representation of the object
print(SignInUsernamePost200Response.to_json())

# convert the object into a dict
sign_in_username_post200_response_dict = sign_in_username_post200_response_instance.to_dict()
# create an instance of SignInUsernamePost200Response from a dict
sign_in_username_post200_response_from_dict = SignInUsernamePost200Response.from_dict(sign_in_username_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



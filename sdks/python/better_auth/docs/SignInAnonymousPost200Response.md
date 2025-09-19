# SignInAnonymousPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 
**session** | [**Session**](Session.md) |  | [optional] 

## Example

```python
from better_auth.models.sign_in_anonymous_post200_response import SignInAnonymousPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignInAnonymousPost200Response from a JSON string
sign_in_anonymous_post200_response_instance = SignInAnonymousPost200Response.from_json(json)
# print the JSON string representation of the object
print(SignInAnonymousPost200Response.to_json())

# convert the object into a dict
sign_in_anonymous_post200_response_dict = sign_in_anonymous_post200_response_instance.to_dict()
# create an instance of SignInAnonymousPost200Response from a dict
sign_in_anonymous_post200_response_from_dict = SignInAnonymousPost200Response.from_dict(sign_in_anonymous_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



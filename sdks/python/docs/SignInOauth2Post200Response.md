# SignInOauth2Post200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**redirect** | **bool** |  | [optional] 

## Example

```python
from better_auth.models.sign_in_oauth2_post200_response import SignInOauth2Post200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignInOauth2Post200Response from a JSON string
sign_in_oauth2_post200_response_instance = SignInOauth2Post200Response.from_json(json)
# print the JSON string representation of the object
print(SignInOauth2Post200Response.to_json())

# convert the object into a dict
sign_in_oauth2_post200_response_dict = sign_in_oauth2_post200_response_instance.to_dict()
# create an instance of SignInOauth2Post200Response from a dict
sign_in_oauth2_post200_response_from_dict = SignInOauth2Post200Response.from_dict(sign_in_oauth2_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



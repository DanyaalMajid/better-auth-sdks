# ResetPasswordPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | The new password to set | 
**token** | **str** | The token to reset the password | [optional] 

## Example

```python
from better_auth.models.reset_password_post_request import ResetPasswordPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPasswordPostRequest from a JSON string
reset_password_post_request_instance = ResetPasswordPostRequest.from_json(json)
# print the JSON string representation of the object
print(ResetPasswordPostRequest.to_json())

# convert the object into a dict
reset_password_post_request_dict = reset_password_post_request_instance.to_dict()
# create an instance of ResetPasswordPostRequest from a dict
reset_password_post_request_from_dict = ResetPasswordPostRequest.from_dict(reset_password_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



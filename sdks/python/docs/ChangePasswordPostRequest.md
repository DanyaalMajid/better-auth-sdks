# ChangePasswordPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | The new password to set | 
**current_password** | **str** | The current password is required | 
**revoke_other_sessions** | **bool** | Must be a boolean value | [optional] 

## Example

```python
from better_auth.models.change_password_post_request import ChangePasswordPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePasswordPostRequest from a JSON string
change_password_post_request_instance = ChangePasswordPostRequest.from_json(json)
# print the JSON string representation of the object
print(ChangePasswordPostRequest.to_json())

# convert the object into a dict
change_password_post_request_dict = change_password_post_request_instance.to_dict()
# create an instance of ChangePasswordPostRequest from a dict
change_password_post_request_from_dict = ChangePasswordPostRequest.from_dict(change_password_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



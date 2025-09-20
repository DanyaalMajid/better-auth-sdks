# SetUserPasswordRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | The new password | 
**user_id** | **str** | The user id | 

## Example

```python
from better_auth.models.set_user_password_request import SetUserPasswordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetUserPasswordRequest from a JSON string
set_user_password_request_instance = SetUserPasswordRequest.from_json(json)
# print the JSON string representation of the object
print(SetUserPasswordRequest.to_json())

# convert the object into a dict
set_user_password_request_dict = set_user_password_request_instance.to_dict()
# create an instance of SetUserPasswordRequest from a dict
set_user_password_request_from_dict = SetUserPasswordRequest.from_dict(set_user_password_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



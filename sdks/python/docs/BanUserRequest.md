# BanUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The user id | 
**ban_reason** | **str** | The reason for the ban | [optional] 
**ban_expires_in** | **float** | The number of seconds until the ban expires | [optional] 

## Example

```python
from better_auth.models.ban_user_request import BanUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BanUserRequest from a JSON string
ban_user_request_instance = BanUserRequest.from_json(json)
# print the JSON string representation of the object
print(BanUserRequest.to_json())

# convert the object into a dict
ban_user_request_dict = ban_user_request_instance.to_dict()
# create an instance of BanUserRequest from a dict
ban_user_request_from_dict = BanUserRequest.from_dict(ban_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



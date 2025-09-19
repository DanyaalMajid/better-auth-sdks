# DeviceTokenPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grant_type** | **str** | The grant type for device flow | 
**device_code** | **str** | The device verification code | 
**client_id** | **str** | The client ID of the application | 

## Example

```python
from better_auth.models.device_token_post_request import DeviceTokenPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTokenPostRequest from a JSON string
device_token_post_request_instance = DeviceTokenPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceTokenPostRequest.to_json())

# convert the object into a dict
device_token_post_request_dict = device_token_post_request_instance.to_dict()
# create an instance of DeviceTokenPostRequest from a dict
device_token_post_request_from_dict = DeviceTokenPostRequest.from_dict(device_token_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



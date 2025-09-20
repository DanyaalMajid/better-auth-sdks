# DeviceApprovePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_code** | **str** | The user code to approve | 

## Example

```python
from better_auth.models.device_approve_post_request import DeviceApprovePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceApprovePostRequest from a JSON string
device_approve_post_request_instance = DeviceApprovePostRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceApprovePostRequest.to_json())

# convert the object into a dict
device_approve_post_request_dict = device_approve_post_request_instance.to_dict()
# create an instance of DeviceApprovePostRequest from a dict
device_approve_post_request_from_dict = DeviceApprovePostRequest.from_dict(device_approve_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeviceDenyPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_code** | **str** | The user code to deny | 

## Example

```python
from better_auth.models.device_deny_post_request import DeviceDenyPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDenyPostRequest from a JSON string
device_deny_post_request_instance = DeviceDenyPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceDenyPostRequest.to_json())

# convert the object into a dict
device_deny_post_request_dict = device_deny_post_request_instance.to_dict()
# create an instance of DeviceDenyPostRequest from a dict
device_deny_post_request_from_dict = DeviceDenyPostRequest.from_dict(device_deny_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeviceCodePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client ID of the application | 
**scope** | **str** | Space-separated list of scopes | [optional] 

## Example

```python
from better_auth.models.device_code_post_request import DeviceCodePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCodePostRequest from a JSON string
device_code_post_request_instance = DeviceCodePostRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceCodePostRequest.to_json())

# convert the object into a dict
device_code_post_request_dict = device_code_post_request_instance.to_dict()
# create an instance of DeviceCodePostRequest from a dict
device_code_post_request_from_dict = DeviceCodePostRequest.from_dict(device_code_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



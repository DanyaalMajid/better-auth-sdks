# DeviceGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_code** | **str** | The user code to verify | [optional] 
**status** | **str** | Current status of the device authorization | [optional] 

## Example

```python
from better_auth.models.device_get200_response import DeviceGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceGet200Response from a JSON string
device_get200_response_instance = DeviceGet200Response.from_json(json)
# print the JSON string representation of the object
print(DeviceGet200Response.to_json())

# convert the object into a dict
device_get200_response_dict = device_get200_response_instance.to_dict()
# create an instance of DeviceGet200Response from a dict
device_get200_response_from_dict = DeviceGet200Response.from_dict(device_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



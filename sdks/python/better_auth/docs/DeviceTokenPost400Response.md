# DeviceTokenPost400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**error_description** | **str** |  | [optional] 

## Example

```python
from better_auth.models.device_token_post400_response import DeviceTokenPost400Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTokenPost400Response from a JSON string
device_token_post400_response_instance = DeviceTokenPost400Response.from_json(json)
# print the JSON string representation of the object
print(DeviceTokenPost400Response.to_json())

# convert the object into a dict
device_token_post400_response_dict = device_token_post400_response_instance.to_dict()
# create an instance of DeviceTokenPost400Response from a dict
device_token_post400_response_from_dict = DeviceTokenPost400Response.from_dict(device_token_post400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



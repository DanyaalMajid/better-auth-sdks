# DeviceCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**device_code** | **str** |  | 
**user_code** | **str** |  | 
**user_id** | **str** |  | [optional] 
**expires_at** | **str** |  | 
**status** | **str** |  | 
**last_polled_at** | **str** |  | [optional] 
**polling_interval** | **float** |  | [optional] 
**client_id** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 

## Example

```python
from better_auth.models.device_code import DeviceCode

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCode from a JSON string
device_code_instance = DeviceCode.from_json(json)
# print the JSON string representation of the object
print(DeviceCode.to_json())

# convert the object into a dict
device_code_dict = device_code_instance.to_dict()
# create an instance of DeviceCode from a dict
device_code_from_dict = DeviceCode.from_dict(device_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


